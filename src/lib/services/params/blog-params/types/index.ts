export type BlogSearchParams = {
  _where: {
    _or: { summary_contains?: string; title_contains?: string }[]
  }
}
