export const getRequest = async <T>(url: string | URL, opt?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
    ...opt
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
