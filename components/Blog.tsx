"use client";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import b4 from "../public/assets/images/bg/bg4.jpg";
import Link from "next/link";

const Blog = ({ image, title, subtitle, text, color, blog }) => {
  return (
    <Card>
      <Image alt="Card image cap" src={image || b4} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
        <Link href={`/article/${blog?._id}`}>
          <Button color={color}>Read More</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
