
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  audioUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  type: string;
  createdBy?: string;
}

export const featuredPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Today's Top Hits",
    description: "The hottest tracks right now",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  },
  {
    id: "2",
    name: "RapCaviar",
    description: "New music from Cardi B, Jack Harlow and Flo Milli.",
    coverUrl: "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  },
  {
    id: "3",
    name: "All Out 2010s",
    description: "The biggest songs of the 2010s.",
    coverUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  },
  {
    id: "4",
    name: "Rock Classics",
    description: "Rock legends & epic songs that continue to inspire generations.",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  },
  {
    id: "5",
    name: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  },
  {
    id: "6",
    name: "Indie Mix",
    description: "The best indie tracks of the season.",
    coverUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  }
];

export const allSongs: Song[] = [
  {
    id: "song1",
    title: "Dreams",
    artist: "Fleetwood Mac",
    album: "Rumours",
    duration: "4:14",
    coverUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    coverUrl: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song3",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:03",
    coverUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song4",
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
    coverUrl: "https://images.unsplash.com/photo-1573247318220-c2683ee87351?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song5",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    coverUrl: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song6",
    title: "Good as Hell",
    artist: "Lizzo",
    album: "Cuz I Love You",
    duration: "2:39",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song7",
    title: "Old Town Road",
    artist: "Lil Nas X",
    album: "7 EP",
    duration: "2:37",
    coverUrl: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  },
  {
    id: "song8",
    title: "Circles",
    artist: "Post Malone",
    album: "Hollywood's Bleeding",
    duration: "3:35",
    coverUrl: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=500&h=500&fit=crop",
    audioUrl: "/path/to/audio"
  }
];

export const recentlyPlayed: Playlist[] = [
  {
    id: "r1",
    name: "Liked Songs",
    description: "Your favorite tracks",
    coverUrl: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=500&h=500&fit=crop",
    type: "Playlist",
    songs: []
  },
  {
    id: "r2",
    name: "Daily Mix 1",
    description: "Made for you",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&h=500&fit=crop",
    type: "Mix",
    songs: []
  },
  {
    id: "r3",
    name: "Discover Weekly",
    description: "New music just for you",
    coverUrl: "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?w=500&h=500&fit=crop",
    type: "Playlist",
    createdBy: "Spotify",
    songs: []
  }
];

export const searchCategories = [
  { id: 1, name: "Podcasts", color: "from-indigo-500", imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=500&fit=crop" },
  { id: 2, name: "Live Events", color: "from-red-500", imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500&h=500&fit=crop" },
  { id: 3, name: "Made for You", color: "from-blue-500", imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&h=500&fit=crop" },
  { id: 4, name: "New Releases", color: "from-purple-500", imageUrl: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=500&h=500&fit=crop" },
  { id: 5, name: "Pop", color: "from-pink-500", imageUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&h=500&fit=crop" },
  { id: 6, name: "Hip-Hop", color: "from-yellow-500", imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&h=500&fit=crop" },
  { id: 7, name: "Rock", color: "from-green-500", imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&h=500&fit=crop" },
  { id: 8, name: "Latin", color: "from-orange-500", imageUrl: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=500&h=500&fit=crop" }
];
