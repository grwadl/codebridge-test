export abstract class BaseService<T> {
  abstract baseUrl: string

  abstract getOne(id: number): Promise<T>

  abstract get(opt: RequestInit): Promise<T[]>
}
