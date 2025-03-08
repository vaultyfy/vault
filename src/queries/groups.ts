import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants"
import { app } from "@utils/endpoints"
import { getCookie } from "cookies-next"

export const getMyGroups = async () => {
  const token = getCookie(TOKEN_KEY, {...cookieOptions})
  if (!token) return

  try {
    const request = await fetch(app.groups.mine, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })

    const response = await request.json()
    return response
  } catch (error) {
    console.error(`${(error as Error).message}`)
  }
}
