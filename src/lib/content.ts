import { part01Content } from './content-parts/part-01';
import { part02Content } from './content-parts/part-02';
import { part03Content } from './content-parts/part-03';
import { part04Content } from './content-parts/part-04';
import { part05Content } from './content-parts/part-05';
import { part06Content } from './content-parts/part-06';
import { part07Content } from './content-parts/part-07';
import { part08Content } from './content-parts/part-08';
import { part09Content } from './content-parts/part-09';

export interface ContentPart {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const contentParts: ContentPart[] = [
  {
    id: "part-01",
    title: "Part One: A Conversation, Not a Confrontation",
    description: "Understanding the Islamic perspective on Jesus and the message of Islam",
    content: part01Content,
  },
  {
    id: "part-02",
    title: "Part Two: Jesus in the Qur'an",
    description: "Who Jesus truly was according to Islamic teachings",
    content: part02Content,
  },
  {
    id: "part-03",
    title: "Part Three: The Crucifixion",
    description: "What really happened, and why Islam disagrees",
    content: part03Content,
  },
  {
    id: "part-04",
    title: "Part Four: The Gospel vs. The Injil",
    description: "What was lost, what remained",
    content: part04Content,
  },
  {
    id: "part-05",
    title: "Part Five: Why Islam Feels Familiar",
    description: "To Christians who think deeply",
    content: part05Content,
  },
  {
    id: "part-06",
    title: "Part Six: Muhammad ﷺ",
    description: "Through the lens of Jesus' teachings",
    content: part06Content,
  },
  {
    id: "part-07",
    title: "Part Seven: What Religion Really Is",
    description: "And why Islam is often misunderstood",
    content: part07Content,
  },
  {
    id: "part-08",
    title: "Part Eight: The Final Reflection",
    description: "Truth, choice, and the journey of the soul",
    content: part08Content,
  },
  {
    id: "part-09",
    title: "Part Nine: For Those Who Feel Ready",
    description: "What it really means to accept Islam",
    content: part09Content,
  },
];
