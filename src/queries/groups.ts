import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants"
import { app } from "@utils/endpoints"
import { ReferalLinkResponse, Response, UserGroups } from "@utils/types"
import { getCookie } from "cookies-next"

export const getJoinedGroups = async () => {
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

    const response: Response = await request.json()
    return response
  } catch (error) {
    console.error(`${(error as Error).message}`)
  }
}

export const getAllGroups = async () => {
  const token = getCookie(TOKEN_KEY, {...cookieOptions})
  if (!token) return

  try {
    const request = await fetch(app.groups.all, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      }
    })

    const response: Response<UserGroups> = await request.json()
    return response
  } catch (error) {
    console.error(`${(error as Error).message}`)
  }
}

export const getReferalLink = async (groupId: string) => {
  const token = getCookie(TOKEN_KEY, {...cookieOptions})
  if (!token || !groupId) return;

  try {
    const request = await fetch(`${app.groups.share}/${groupId}`, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })

    const response: Response<ReferalLinkResponse> = await request.json();
    return response;
  } catch (error) {
    console.error(error)
  }
}
