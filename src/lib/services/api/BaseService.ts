export abstract class BaseService<T> {
  abstract baseUrl: string

  abstract getOne(id: number): Promise<unknown>

  abstract get(opt: unknown): Promise<unknown>
}
