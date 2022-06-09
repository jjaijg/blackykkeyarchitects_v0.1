import React from "react";
import { Stack,IconButton, Paper, Typography, Box, Chip } from "@mui/material";
import { AllOutSharp, LocationOn } from "@mui/icons-material";
import "../styles/components/projectCard.css";

function ProjectCard({ handleOpenGallery, title, location, description, categories, mainImg, images }) {
  return (
    <Paper
      sx={{
        height: "350px",
        width: "300px",
        my: 4,
        borderRadius: ".375rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      elevation={5}
      className="group"
    >
      <div className="w-full h-full rounded-md relative">
        <img
          src="https://i.postimg.cc/nhG8H3X6/copywriting.jpg"
          alt={"project data"}
          className="w-full h-full ease-in-out duration-500 rounded-md group-hover:rotate-6 group-hover:scale-125"
        />
        <div className="absolute top-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80 rounded-md">
          <Stack spacing={1.5} sx={{ p: 2, h: "100%" }} alignItems="start">
            <Typography variant="h5" sx={{ color: "white" }}>
              Project Title
            </Typography>
          </Stack>
          <Stack
            spacing={0.3}
            direction="row"
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              overflow: "hidden",
            }}
          >
            <Chip
              label="category1"
              color="warning"
              size="sm"
              sx={{ fontSize: 10, color: "white" }}
            />
            <Chip
              label="category1"
              color="warning"
              size="sm"
              sx={{ fontSize: 10, color: "white" }}
            />
            <Chip
              label="category1"
              color="warning"
              size="sm"
              sx={{ fontSize: 10, color: "white" }}
            />
            <Chip
              label="category1"
              color="warning"
              size="sm"
              sx={{ fontSize: 10, color: "white" }}
            />
          </Stack>
          <div className="top-0 hidden w-full h-[70%] items-center justify-center group-hover:flex transition-all duration-700">
            <IconButton sx={{ color: "white" }} onClick={handleOpenGallery}>
              <AllOutSharp sx={{ width: "2.5em", height: "2.5em" }} />
            </IconButton>
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-gray-900 to-gray-700 w-full h-[100]  -bottom-[100%] transition-all duration-700 group-hover:bottom-0 z-10">
          <Stack spacing={2} sx={{ p: 2 }} alignItems="start">
            {/* <Typography variant="h5">Project Title</Typography> */}
            <Stack spacing={1.5} sx={{ p: 1, h: "100%" }} alignItems="start">
              <Typography variant="p" sx={{ color: "white" }}>
                Project Description
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                <LocationOn color="error" /> Location
              </Typography>
            </Stack>
          </Stack>
        </div>
      </div>
    </Paper>
  );
}

export default ProjectCard;
