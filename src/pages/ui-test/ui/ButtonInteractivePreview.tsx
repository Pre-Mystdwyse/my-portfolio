"use client";

import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { IndentGuide } from "@/shared/ui/indent-guide";
import { SectionTitle } from "@/shared/ui/section-title";

export function ButtonInteractivePreview() {
  const buttonText = "Live <~>";
  const linkText = "Git <~>";
  return (
    <Container>
      <section className="m-10 flex gap-4">
        <div className="flex flex-col items-center gap-4">
          <span>primary</span>
          <Button onClick={() => console.log("primary button clicked")}>
            {buttonText}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span>secondary</span>
          <Button
            onClick={() => console.log("secondary button clicked")}
            variant="secondary"
          >
            {buttonText}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span>disabled-primary</span>
          <Button
            onClick={() => console.log("how did u clicked it?")}
            variant="primary"
            disabled
          >
            {buttonText}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span>disabled-secondary</span>
          <Button
            onClick={() => console.log("how did u clicked it x2?")}
            variant="secondary"
            disabled
          >
            {buttonText}
          </Button>
        </div>
      </section>

      <section className="m-10 flex gap-4">
        <div className="flex flex-col items-center gap-4">
          <span>Link-primary</span>
          <Button href="#">{linkText}</Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span>Link-secondary</span>
          <Button href="#" variant="secondary">
            {linkText}
          </Button>
        </div>
      </section>

      <div className="group/glowingLine">
        <SectionTitle title="test-section" />
        <IndentGuide lineClassName="group-hover/glowingLine:bg-primary">
          some text some text some text some text some textsome textsome text
          some textsome textsome textsome textsome textsome textsome textsome
          textsome textsome textsome textsome textsome textsome textsome
          textsome text
        </IndentGuide>
      </div>
    </Container>
  );
}
