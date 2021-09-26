/**@param int artistID
 * @returns an array urls
 * @description takes in the artist Deezer id and returns an array of
 * formatted url for each specified resource such as album, top tracks,...
 */
 const URL_CORS_PREFIX = "https://secret-ocean-49799.herokuapp.com/"
const artist_top_tracks = (id:number, track_number: number)=>{
    return `https://api.deezer.com/artist/${id}/top?limit=${track_number}`
}
const artist_albums = (id:number, album_number: number)=>{
    return `https://api.deezer.com/artist/${id}/albums?limit=${album_number}`
}
const related_artists = (id:number, limit: number)=>{
    return `https://api.deezer.com/artist/${id}/related?limit=${limit}`
}
  
  /**@function
   * @param string search param
   * @returns the formatted param
   * @description takes a string and returns the same string trimmed,with all
   * non-leading or trailing whitespaces replaced with the passed char
   * @example " kanye   west  " => "kanye-west"
   */
  const urlFormatter = (str: string, char: string) => str.trim().replace(/\s+/g, char)
  
  export {artist_albums, artist_top_tracks, related_artists ,urlFormatter, URL_CORS_PREFIX}
  