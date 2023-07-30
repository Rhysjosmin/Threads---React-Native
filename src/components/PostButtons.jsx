import { Stack } from "@react-native-material/core";
import { IconButton } from "react-native-paper";


function PostButtons(){
    return(
        <Stack direction="row" style={{ marginTop: 4 }}>
        <IconButton
          icon="heart-outline"
          size={22}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="chat-outline"
          size={22}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="repeat-variant"
          size={22}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="send"
          size={22}
          onPress={() => console.log("Pressed")}
        />
      </Stack>
    )
}

export default PostButtons