import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="290"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
          className="cardmedia"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            T-SHIRTS
          </Typography>

          <Typography variant="body2" color="text.secondary">
            40-80% OFF
          </Typography>

          <Typography variant="body2" color="text.secondary">
            SHOP NOW
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
