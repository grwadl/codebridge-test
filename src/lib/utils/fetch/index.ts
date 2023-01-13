export const getRequest = async <T>(url: string | URL, opt?: RequestInit): Promise<T> => {
  console.log(url)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    ...opt
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
