interface Artist {
  readonly name: string
}

interface PrimaryArtist {
  readonly id: number
  readonly primary_artist: Artist
  readonly title: string
}

export interface Result {
  readonly result: PrimaryArtist
}

interface ResponseClass {
  readonly hits: Result[]
}

export interface GeniusResponse {
  readonly response: ResponseClass
}
