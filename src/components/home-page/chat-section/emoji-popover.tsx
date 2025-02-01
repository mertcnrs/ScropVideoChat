'use client';

import React, { Suspense } from 'react';
import * as Popover from '@radix-ui/react-popover';
import dynamic from 'next/dynamic';
import { MdEmojiEmotions } from 'react-icons/md';
import { LuLoader2 } from 'react-icons/lu';

// EmojiPicker'ı SSR olmadan yükle ve önbelleğe al
const EmojiPicker = dynamic(() => import('@/lib/EmojiPicker'), {
  ssr: false,
  loading: () => (
    <div className="h-[435px] w-[350px] flex items-center justify-center bg-[#1f1b2e] rounded-lg">
      <LuLoader2 className="animate-spin text-2xl text-purple-500" />
    </div>
  ),
});

interface EmojiPopoverComponentProps {
  setClientMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function EmojiPopoverComponent({
  setClientMessage,
}: EmojiPopoverComponentProps): React.ReactNode {
  const onEmojiClickHandler = ({ emoji }: { emoji: string }) => {
    setClientMessage((prevMessage) => prevMessage + emoji);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button type="button" className="outline-none">
          <MdEmojiEmotions className="text-xl md:text-2xl" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content 
          className="z-50" 
          sideOffset={5} 
          side="top"
          align="end"
        >
          <div className="relative">
            <Suspense fallback={
              <div className="h-[435px] w-[350px] flex items-center justify-center bg-[#1f1b2e] rounded-lg">
                <LuLoader2 className="animate-spin text-2xl text-purple-500" />
              </div>
            }>
              <EmojiPicker onEmojiClick={onEmojiClickHandler} />
            </Suspense>
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
