import React, { useEffect, useRef } from 'react';
import {
  RandomParticipantType,
  type PeerState,
} from '@/store/slices/peerSlice';
import { Text } from '@radix-ui/themes';
import { format } from 'timeago.js';
import Image from 'next/image';

interface ChatMessageComponentProps {
  remote: PeerState['remote'];
  clientId: string | undefined;
}

export default function ChatMessageComponent({
  remote,
  clientId,
}: ChatMessageComponentProps): React.ReactNode {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (remote.messages.length) {
      messageRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [remote.messages]);

  return (
    <div className="flex flex-col px-4 py-2 min-h-0 scrollbar-hide h-full">
      <div className="flex-1">
        {remote.messages.map((msg, i) =>
          msg.clientId !== RandomParticipantType.System ? (
            <div
              key={i}
              ref={messageRef}
              className={`flex items-start gap-3 mb-3 ${
                msg.clientId === clientId ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Profil Resmi */}
              <div className="flex-shrink-0">
                <Image
                  src={msg.clientId === clientId ? "/foto1.jpg" : "/foto2.jpg"}
                  alt="profile"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </div>

              {/* Mesaj İçeriği */}
              <div className={`flex flex-col ${
                msg.clientId === clientId ? 'items-end' : 'items-start'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-purple-300">
                    {msg.clientId === clientId
                      ? RandomParticipantType.You
                      : RandomParticipantType.Guest}
                  </span>
                  <span className="text-xs text-gray-500">{format(msg.time)}</span>
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.clientId === clientId 
                    ? 'bg-purple-500/20 text-purple-100' 
                    : 'bg-[#2a2438] text-gray-200'
                }`}>
                  <Text size="2" weight="medium">{msg.message}</Text>
                </div>
              </div>
            </div>  
          ) : (
            <div
              className="flex flex-col items-center text-xs mb-2 text-gray-500"
              ref={messageRef}
              key={i}
            >
              {msg.message}
            </div>
          )
        )}
      </div>
    </div>
  );
}
