import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { projects } from "@/services/data";
import Image from "next/image";
import Link from "next/link";

const ExplorePage = () => {
  return (
    <SimpleGrid
      columns={3}
      gap={5}
      className="bg-white px-8 py-4 dark:bg-black"
    >
      {projects.map((project) => (
        <Card
          key={project.projectName}
          overflow="hidden"
          borderRadius="md"
          className="transition duration-150 ease-out hover:scale-105 md:ease-in"
        >
          <CardHeader>
            <Image alt="project image" src={project.image} />
          </CardHeader>
          <CardBody>
            <Heading>
              <Link href={`/explore/${project.id}`}>{project.projectName}</Link>
            </Heading>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ExplorePage;
