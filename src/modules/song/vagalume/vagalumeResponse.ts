interface Artist {
  readonly name: string
}

interface Music {
  readonly name: string
  readonly text: string
}

export interface VagalumeResponse {
  readonly art: Artist
  readonly mus: Music[]
}
