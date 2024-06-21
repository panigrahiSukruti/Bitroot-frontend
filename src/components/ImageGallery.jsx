import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Container, Modal, Box, Button } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 375,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    }
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.7,
  transition: theme.transitions.create('opacity'),
}));

const ImageGallery = () => {
  const [expanded, setExpanded] = useState(false);
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const apiUrl =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log("responeData", userData);

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={12} padding={8}>
        <Grid item xs={6} sm={6} md={6}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              height="375"
              image={userData[0] ? userData[0].thumbnail.large : ""}
              alt="Image"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography fontFamily={"Lato"} gutterBottom variant="h5" component="div">
                {userData[0] ? userData[0].title : ""}
              </Typography>
              <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                {userData[0] ? userData[0].content : ""}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "48px",
                }}
              >
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[0]
                    ? userData[0].author.name + " - " + userData[0].author.role
                    : []}{" "}
                </Typography>
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[0]
                    ? new Date(userData[0].date * 1000).toLocaleDateString(
                        "default",
                        { month: "short", day: "numeric", year: "numeric" }
                      )
                    : ""}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              height="375"
              image={userData[1] ? userData[1].thumbnail.large : ""}
              alt="Image"
            />
            <CardContent>
              <Typography fontFamily={"Lato"} gutterBottom variant="h5" component="div">
                {userData[1] ? userData[1].title : ""}
              </Typography>
              <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                {userData[1] ? userData[1].content : ""}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "48px",
                }}
              >
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[1]
                    ? userData[1].author.name + " - " + userData[1].author.role
                    : []}{" "}
                </Typography>
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[1]
                    ? new Date(userData[1].date * 1000).toLocaleDateString(
                        "default",
                        { month: "short", day: "numeric", year: "numeric" }
                      )
                    : ""}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              height="375"
              image={userData[2] ? userData[2].thumbnail.large : ""}
              alt="Image"
            />
            <CardContent>
              <Typography fontFamily={"Lato"} gutterBottom variant="h5" component="div">
                {userData[2] ? userData[2].title : ""}
              </Typography>
              <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                {userData[2] ? userData[2].content : ""}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "48px",
                }}
              >
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[2]
                    ? userData[2].author.name + " - " + userData[2].author.role
                    : []}{" "}
                </Typography>
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[2]
                    ? new Date(userData[2].date * 1000).toLocaleDateString(
                        "default",
                        { month: "short", day: "numeric", year: "numeric" }
                      )
                    : ""}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Card elevation={0}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minWidth: 300,
                width: "100%",
              }}
            >
              <ImageButton
                focusRipple
                key="Learn more"
                style={{
                  width: "100%",
                }}
              >
                <ImageSrc
                  style={{
                    backgroundImage: `url(${
                      userData[3] ? userData[3].thumbnail.large : ""
                    })`,
                  }}
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    onClick={handleOpen}
                  >
                    {"Learn more"}
                  </Typography>
                </Image>
              </ImageButton>
            </Box>
            {/* <CardMedia
              component="img"
              height="375"
              image={userData[3] ? userData[3].thumbnail.large : ""}
              alt="Image"
            /> */}
            <CardContent>
              <Typography
              fontFamily={"Lato"}
              style={{cursor:"pointer"}}
                gutterBottom
                variant="h5"
                component="div"
                onClick={handleOpen}
              >
                {userData[3] ? userData[3].title : ""}
              </Typography>
              <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                {userData[3] ? userData[3].content : ""}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "48px",
                }}
              >
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[3]
                    ? userData[3].author.name + " - " + userData[3].author.role
                    : []}{" "}
                </Typography>
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[3]
                    ? new Date(userData[3].date * 1000).toLocaleDateString(
                        "default",
                        { month: "short", day: "numeric", year: "numeric" }
                      )
                    : ""}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card elevation={0}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "8px",
                }}
              >
                <CloseIcon onClick={handleClose} style={{ color: "darkgrey" }}>
                  Close
                </CloseIcon>
              </div>
              <CardMedia
                component="img"
                height="375"
                image={userData[3] ? userData[3].thumbnail.large : ""}
                alt="Image"
              />
              <CardContent>
                <Typography
                fontFamily={"Lato"}
                  gutterBottom
                  variant="h5"
                  component="div"
                  onClick={handleOpen}
                >
                  {userData[3] ? userData[3].title : ""}
                </Typography>
                <Typography fontFamily={"Lato"} variant="body2" color="text.secondary">
                  {userData[3] ? userData[3].content : ""}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    paddingTop: "48px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={userData[3] ? userData[3].author.avatar : ""}
                  />
                  <Typography fontFamily={"Lato"} variant="body2" color="text.secondary" ml="16px">
                    {userData[3]
                      ? userData[3].author.name +
                        " - " +
                        userData[3].author.role
                      : []}{" "}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ImageGallery;
