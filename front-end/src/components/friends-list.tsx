import { jsx } from "react/jsx-runtime";
import { Friend } from "../model/friend";
import FriendCard from "./friends-card";
import { useState } from "react";

function FriendsList() {
  /*
    const [friends, updateFriends] = useState<Friend[]>([{
        Username: "Steve"
    }, {
        Username: "Bob"
    }, {
        Username: "Rebecca"
    }])
*/

  /**
   *
   * | | <-
   * | | <-
   * | | <-
   */
  return (
    <div className="w-[225px] bg-[#2B2D31] flex flex-col-reverse">
      <div className="h-[60px] bg-[#232428]"></div>
      <div className="h-[70%] flex flex-col"></div>
      <div className="flex-1"></div>
    </div>
  );
}

export default FriendsList;
