import React, { FC } from "react";
import InfoCard from "@/components/ui/InfoCard";
import Layout from "./Layout";
import { MaterialContent } from "../materials/content";

interface MaterialLayoutProps {
  materialContent: MaterialContent;
  submaterialContent: MaterialContent;
}

const SubmaterialLayout: FC<MaterialLayoutProps> = ({
  materialContent,
  submaterialContent,
}) => {
  const { props, submaterials, theme } = materialContent;

  if (!submaterials || Object.keys(submaterials).length === 0) {
    return <div>No submaterials available</div>;
  }

  return (
    <Layout>
      <div className="flex flex-row gap-4 items-start">
        <InfoCard materialContent={materialContent} />

        {Object.entries(submaterials).map(([key, submaterial]) => (
          <InfoCard key={key} materialContent={submaterial} />
        ))}
      </div>
    </Layout>
  );
};

export default SubmaterialLayout;
