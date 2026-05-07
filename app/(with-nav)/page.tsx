import { Prose } from "@/components/typography/prose";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Prose className="max-w-2xl w-full mx-auto p-4">
      <div className="not-prose flex flex-wrap gap-2">
        <Button>Click Me!</Button>
        <Button variant="outline">Me Too!</Button>
        <Button variant="secondary">I'm Secondary</Button>
        <Button disabled>I'm Disabled</Button>
      </div>

      <h2>The Foundation of Modern Web</h2>
      <p>
        Building scalable interfaces requires a balance of performance and
        aesthetics. When you dive into the architecture of modern frameworks,
        the focus shifts from simple DOM manipulation to state management and
        efficient rendering cycles. This ensures that user interactions remain
        fluid, even as the complexity of the application grows.
      </p>

      <h3>System Architecture</h3>
      <p>
        Reliability is the cornerstone of any digital product. By implementing
        robust error boundaries and type-safe data fetching, developers can
        preemptively address potential bottlenecks. This proactive approach
        drastically reduces the overhead during production deployments.
      </p>

      <blockquote>
        "The best interfaces are those that disappear, allowing the user to
        focus on their task without friction."
      </blockquote>

      <h3>Design Philosophy</h3>
      <p>
        Consistency in design isn't just about colors; it's about the rhythm of
        spacing and the hierarchy of typography. A well-defined design system
        allows teams to iterate quickly while maintaining a cohesive visual
        language across different modules and pages.
      </p>

      <h2>Optimizing for Content</h2>
      <p>
        Images and media often represent the largest portion of a page's
        payload. Leveraging modern compression formats and lazy-loading
        techniques is essential for maintaining high scores in performance
        audits. Beyond technical metrics, this directly impacts user retention
        and accessibility.
      </p>

      <ul>
        <li>
          <strong>Scalability:</strong> Handling growth without technical debt.
        </li>
        <li>
          <strong>Accessibility:</strong> Ensuring everyone can navigate the UI.
        </li>
        <li>
          <strong>Performance:</strong> Minimizing the time to interactive.
        </li>
      </ul>

      <h3>Future-Proofing</h3>
      <p>
        The landscape of web development is constantly shifting. Staying current
        means embracing modularity. By breaking down large monolithic structures
        into smaller, reusable components, we create a codebase that is easier
        to test, debug, and evolve over time.
      </p>

      <p>
        As we look toward the next generation of web technologies, the emphasis
        remains on the developer experience. Tools that simplify the transition
        from local development to global edge deployment are becoming the
        standard, allowing creators to spend more time on features and less time
        on infrastructure management.
      </p>

      <h2>Final Considerations</h2>
      <p>
        Every line of code should serve a purpose. Whether it's enhancing the
        visual feedback of a button or optimizing the SEO meta tags, attention
        to detail is what separates a good site from a great one. Continuous
        integration and delivery pipelines further ensure that quality is never
        compromised during rapid release cycles.
      </p>
    </Prose>
  );
}
