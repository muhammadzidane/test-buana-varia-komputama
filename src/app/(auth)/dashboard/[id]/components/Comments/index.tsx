"use client";

import React, { useState } from "react";

import { Button, Input } from "@/components";

const initialComments = [
  "Amazing series with a complex storyline!",
  "Loved the plot twists and characters.",
  "One of the best sci-fi series I've watched.",
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-6">
      <h3 className="text-lg font-bold mb-4">Comments</h3>
      <div className="mb-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              className="mb-2 p-2 border border-gray-200 rounded"
              key={index}
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>

      <div className="flex gap-2">
        <Input
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          placeholder="Add a comment..."
          value={newComment}
          type="text"
        />
        <Button onClick={handleAddComment}>Post</Button>
      </div>
    </div>
  );
};

export default Comments;
