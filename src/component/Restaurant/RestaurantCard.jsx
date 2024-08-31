import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function RestaurantCard() {
  return (
    <Card className="w-[18rem] ">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://i.pinimg.com/474x/af/89/79/af8979f468765c77ba100d750c0e4e14.jpg"
          alt=""
        />
        <Chip
        size="small"
        className="absolute top-2 left-2"
        color={true?"success":"error"}
        label={true?"open":"closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
            <p className="font-semibold text-lg">Nhà hàng Việt Nam</p>
            <p className="text-gray-500 text-sm">
                Thèm tất cả? Hãy đến với nhà hàng của chúng tôi.
            </p>
        </div>
        <div>
            <IconButton>
                {true?<FavoriteIcon></FavoriteIcon>:<FavoriteBorderIcon></FavoriteBorderIcon>}
            </IconButton>
        </div>
      </div>
    </Card>
  );
}
