"use client";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { projects } from "@/services/data";
import Image from "next/image";
import { useParams } from "next/navigation";

const DetailsPage = () => {
  const { id } = useParams();
  const numberId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const project = projects.find((project) => project.id === numberId);
  console.log(project);

  return (
    <div>
      <Card key={project?.id}>
        <CardHeader>
          <Image alt="project image" src={project?.image!} />
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </div>
  );
};

export default DetailsPage;
