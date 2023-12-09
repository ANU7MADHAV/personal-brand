"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { projects } from "@/services/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { link } from "fs";

const DetailsPage = () => {
  const { id } = useParams();
  const numberId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const project = projects.find((project) => project.id === numberId);

  return (
    <Card
      key={project?.id}
      className="w-screen overflow-hidden bg-white dark:bg-black dark:text-white"
    >
      <CardHeader className="flex w-screen flex-col md:flex-row">
        <a href={project?.link}>
          <Image
            alt="project image"
            src={project?.image!}
            className="overflow-hidden rounded-md object-cover"
          />
        </a>

        <Box className="px-4 py-4">
          <a href={project?.link}>
            <Heading className="py-3 md:whitespace-nowrap md:text-2xl lg:text-3xl">
              {project?.projectName}
            </Heading>
          </a>
          <Heading className="text-medium font-semibold">
            Description :{" "}
            <span className="font-light">{project?.description}</span>
          </Heading>
          <Heading className="text-medium font-semibold">
            Highlights :{" "}
            <span className="font-light">
              {project?.functionalityHighlights}
            </span>
          </Heading>
          <Heading className="text-medium font-semibold">
            Techonogies :{" "}
            <Text>
              Frontend :{" "}
              <span className="font-light">
                {project?.technologies.frontend}
              </span>
            </Text>
            {project?.technologies.backend && (
              <Text>
                Backend :{" "}
                <span className="font-light">
                  {project?.technologies.backend}
                </span>
              </Text>
            )}
            {project?.technologies.authentication && (
              <Text>
                Authetication :{" "}
                <span className="font-light">
                  {project?.technologies.authentication}
                </span>
              </Text>
            )}
          </Heading>
        </Box>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};

export default DetailsPage;
