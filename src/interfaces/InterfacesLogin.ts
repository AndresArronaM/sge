export interface InterfacesLogin {
  user: string | null,
  password: string | null,
  sesion: boolean
}

export interface InterfacesErrorLogin {
  user?: string,
  password?: string
}
