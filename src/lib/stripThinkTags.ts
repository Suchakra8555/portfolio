/**
 * Strip `<think>...</think>` reasoning blocks that some models (e.g. Qwen) can emit.
 *
 * Also handles an *unterminated* block: if the model's reasoning consumes the
 * entire token budget, generation gets cut off before the closing `</think>`
 * tag ever appears, and the whole raw reasoning dump would otherwise leak
 * through as the "reply".
 */
export function stripThinkTags(text: string): string {
  return text
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/<think>[\s\S]*$/gi, '')
    .trim()
}
