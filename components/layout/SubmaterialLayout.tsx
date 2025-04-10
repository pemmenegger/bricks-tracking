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
  const { submaterials } = materialContent;

  if (!submaterials || Object.keys(submaterials).length === 0) {
    return <div>No submaterials available</div>;
  }

  return (
    <Layout>
      <div className="flex gap-4 items-start">
        <InfoCard materialContent={materialContent} />

        <div className="relative w-full mt-48 flex gap-4 items-start">
          {Object.entries(submaterials).map(([key, submaterial]) => {
            if (submaterial.props.path === submaterialContent.props.path) {
              return <InfoCard key={key} materialContent={submaterial} />;
            } else {
              return (
                <span className="opacity-20">
                  <InfoCard key={key} materialContent={submaterial} />
                </span>
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SubmaterialLayout;
