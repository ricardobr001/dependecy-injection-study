export interface SongInterface {
  getlyric: (title: string, artist: string) => Promise<string[]>
}
