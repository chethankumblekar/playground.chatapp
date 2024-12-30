export interface UserMessage {
  id: string;
  senderId: string;
  recipientId: string;
  groupId: string | undefined;
  content: string;
  sentAt: string;
}
