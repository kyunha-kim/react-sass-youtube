import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import VideoCard from "../../components/VideoCard";
import { SidebarContext } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = useState(storedVideos || []);

  const { setIsToggled } = useContext(SidebarContext);

  const getMainVideos = useCallback(async () => {
    try {
      if (!storedVideos) {
        const response = await axios.get(
          `/search?part=snippet&maxResults=10&q=슈퍼커브%20`
        );
        let videos = await response.data.items;

        videos = await getVideoInfo(videos);

        setMainVideos(videos);

        localStorage.setItem("mainVideos", JSON.stringify(videos));
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  useEffect(() => {
    setIsToggled(true);
  }, []);

  return (
    <section className="mainGallery">
      {mainVideos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={video.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}
    </section>
  );
};

export default MainPage;
