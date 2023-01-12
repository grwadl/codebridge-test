export abstract class BaseService<T> {
  abstract baseUrl: string

  abstract getOne(id: number): Promise<T>

  abstract get(opt: unknown): Promise<T[]>
}
