import React from "react";

export const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7.2"
      height="7.2"
      viewBox="0 0 7.2 7.2"
    >
      <path
        d="M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z"
        transform="translate(-64 -63.999)"
        fill="currentColor"
      />
    </svg>
  );
};

export const Plus = ({
  color = "currentColor",
  width = "60px",
  height = "60px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <g
        id="Group_3371"
        data-name="Group 3371"
        transform="translate(-1539 -2317.5)"
      >
        <rect
          id="Rectangle_680"
          data-name="Rectangle 680"
          width="16"
          height="1.5"
          transform="translate(1539 2325)"
          fill={color}
        />
        <rect
          id="Rectangle_681"
          data-name="Rectangle 681"
          width="16"
          height="1.5"
          transform="translate(1547.5 2317.5) rotate(90)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export const Garbage = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20.433" height="20.906" viewBox="0 0 21.433 25.906">
      <g id="noun_Trash_2025395" transform="translate(-10.7 -2.5)">
        <g id="Group_6330" data-name="Group 6330" transform="translate(10.7 2.5)">
          <path id="Path_50659" data-name="Path 50659" d="M18.809,48.134a2.176,2.176,0,0,0,2.182,2.018H31.734a2.176,2.176,0,0,0,2.182-2.018L35.225,32.4H17.5ZM30.1,36.081a.738.738,0,0,1,1.473.109l-.682,10.335a.738.738,0,0,1-1.473-.109Zm-4.472.027a.736.736,0,1,1,1.473,0V46.444a.736.736,0,0,1-1.473,0Zm-3.763-.736h0a.735.735,0,0,1,.791.682l.682,10.335a.738.738,0,0,1-1.473.109l-.682-10.335A.718.718,0,0,1,21.863,35.372Z" transform="translate(-15.646 -24.247)" />
          <path id="Path_50660" data-name="Path 50660" d="M29.761,6.236h-4.09A4.216,4.216,0,0,0,21.5,2.5h-.191a4.17,4.17,0,0,0-4.145,3.736h-4.09A2.374,2.374,0,0,0,10.7,8.608a.559.559,0,0,0,.573.573H31.561a.559.559,0,0,0,.573-.573A2.374,2.374,0,0,0,29.761,6.236ZM21.335,4.709h.191a1.982,1.982,0,0,1,1.909,1.527H19.426A1.959,1.959,0,0,1,21.335,4.709Z" transform="translate(-10.7 -2.5)" />
        </g>
      </g>
    </svg>
  );
};