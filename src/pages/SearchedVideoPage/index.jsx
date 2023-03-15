import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { SidebarContext } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";
import VideoCard from "../../components/VideoCard";

const SearchedVideoPage = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const { searchQuery } = useContext(SearchContext);

  const { setIsToggled } = useContext(SidebarContext);

  const loadVideoInfo = async () => {
    setIsToggled(true);
    const videos = await getVideoInfo(searchQuery.videos);
    setSearchVideos(videos);
  };

  useEffect(() => {
    loadVideoInfo();
  }, [loadVideoInfo]);

  const searchVideosMarkUp = searchVideos?.map((video) => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      img={video.snippet.thumbnails.medium.url}
      info={video.snippet}
      eInfo={video.extraInfo}
      channelInfo={video.channelInfo}
    />
  ));

  return <section className="searchedVideos">{searchVideosMarkUp}</section>;
};

export default SearchedVideoPage;
