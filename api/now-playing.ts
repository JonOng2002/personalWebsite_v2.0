
import SpotifyWebApi from 'spotify-web-api-node';

// Initialize the Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

// This is a Vercel serverless function.
// It uses the native Node.js http request and response objects.
export default async function handler(req, res) {
  // Set caching headers to prevent 304 Not Modified responses
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);

  try {
    // Refresh the access token
    const data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body['access_token']);

    // Get the user's currently playing track
    const nowPlaying = await spotifyApi.getMyCurrentPlayingTrack();

    if (nowPlaying.body && nowPlaying.body.item) {
      const item = nowPlaying.body.item;
      const artist = item.artists && item.artists.length > 0 ? item.artists[0].name : 'Unknown Artist';
      const albumArt = item.album && item.album.images && item.album.images.length > 0 ? item.album.images[0].url : '';

      res.status(200).json({
        song: item.name,
        artist: artist,
        albumArt: albumArt,
        spotifyUrl: item.external_urls.spotify,
        type: 'currently-playing',
      });
    } else {
      // If no track is currently playing, get the most recently played track
      const recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 });
      if (recentlyPlayed.body.items.length > 0) {
        const track = recentlyPlayed.body.items[0].track;
        const artist = track.artists && track.artists.length > 0 ? track.artists[0].name : 'Unknown Artist';
        const albumArt = track.album && track.album.images && track.album.images.length > 0 ? track.album.images[0].url : '';

        res.status(200).json({
          song: track.name,
          artist: artist,
          albumArt: albumArt,
          spotifyUrl: track.external_urls.spotify,
          type: 'recently-played',
        });
      } else {
        res.status(200).json({ song: null });
      }
    }
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    res.status(500).json({ error: 'Error fetching Spotify data' });
  }
}
