import { Comment } from "../components/utils/interface";
import Link from "next/link";

interface Props {
  comments: Array<Comment>;
  slug: string;
  commentsOrder: string;
}

const AllComments = ({ comments, slug, commentsOrder }: Props) => {
  return <div>AllComments</div>;
};

export default AllComments;
