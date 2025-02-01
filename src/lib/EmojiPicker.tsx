import React from 'react';
import EmojiPickerReact from 'emoji-picker-react';

interface EmojiPickerProps {
  onEmojiClick: ({ emoji }: { emoji: string }) => void;
}

export default function EmojiPicker({ onEmojiClick }: EmojiPickerProps) {
  return (
    <EmojiPickerReact
      onEmojiClick={onEmojiClick}
      autoFocusSearch={false}
      searchPlaceHolder="Emoji ara..."
      skinTonesDisabled
      height={435}
      width={350}
      lazyLoadEmojis={true}
    />
  );
} 