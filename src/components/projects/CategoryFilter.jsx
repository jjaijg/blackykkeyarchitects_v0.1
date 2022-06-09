import {useState} from 'react'
import {Box, Paper, Tooltip} from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const data = [
  { key: "all", value: "All" },
  { key: "Category1", value: "Category1" },
  { key: "Category2", value: "Category2" },
  { key: "Category3", value: "Category3" },
  { key: "Category4", value: "Category4" },
  { key: "Category5", value: "Category5" },
  { key: "Category6", value: "Category6" },
  { key: "Category7", value: "Category7" },
  { key: "Category8", value: "Category8" },
  { key: "Category9", value: "Category9" },
  { key: "Category10", value: "Category10 popiouoiuoi yiutyutUY" },
  { key: "Category11", value: "Category11" },
  { key: "Category12", value: "Category12" },
  { key: "Category13", value: "Category13" },
  { key: "Category14", value: "Category14" },
  { key: "Category15", value: "Category15" },
  { key: "Category16", value: "Category16" },
];

function CategoryFilter({categories}) {

    const [selected, setSelected] = useState({ key: "all", value: "All" });

    const handleSelected = (category) => () => {
        setSelected(category)
    }

  return (
    <Paper
      sx={{
        display: "fex",
        width: "90%",
        justifyContent: "center",
        mx: "auto",
        p: 1,
      }}
    >
      {/* <Stack
        direction={"row"}
        alignContent="center"
        justifyContent={"center"}
        spacing={2}
      > */}
      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        style={{ paddingRight: "10px", paddingLeft: "10px"}}
      >
        {data.map((cat) => (
          <SwiperSlide key={cat.key}>
              <Tooltip title={cat.value} placement="top">
            <Box
              sx={{
                cursor: "pointer",
                color: selected?.key === cat.key ? "#0929A5" : "inherit",
                background: selected?.key === cat.key ? "lightgray" : "inherit",
                fontWeight: selected?.key === cat.key ? "500" : "inherit",
                borderRadius: "15px",
                // background: "green",
                textAlign:"center",
                whiteSpace:"nowrap",
                textOverflow: "ellipsis",
                overflow:"hidden",
                p:1
              }}
              onClick={handleSelected(cat)}
            >

              {cat.value}
            </Box>
                </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </Stack> */}
    </Paper>
  );
}

export default CategoryFilter