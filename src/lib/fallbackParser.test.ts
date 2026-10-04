import assert from "node:assert";
import { test, describe } from "node:test";
import { fallbackParseTextToResume, isSkillInText } from "./fallbackParser.ts";

describe("isSkillInText helper", () => {
  test("correctly matches special character technologies", () => {
    assert.strictEqual(isSkillInText("C++", "Experienced C++ Developer"), true);
    assert.strictEqual(isSkillInText("C#", "Proficient in C# and .NET"), true);
    assert.strictEqual(isSkillInText(".NET", "Proficient in C# and .NET"), true);
    assert.strictEqual(isSkillInText("Next.js", "Built using Next.js and React"), true);
    assert.strictEqual(isSkillInText("CI/CD", "Automated CI/CD pipelines"), true);
    assert.strictEqual(isSkillInText("Vue.js", "Frontend with Vue.js"), true);
    assert.strictEqual(isSkillInText("HTML5/CSS3", "Proficient in HTML5/CSS3"), true);
  });

  test("does not false-positive match sub-words", () => {
    assert.strictEqual(isSkillInText("Java", "JavaScript engineer"), false);
    assert.strictEqual(isSkillInText("Go", "Good at programming"), false);
  });
});

describe("fallbackParseTextToResume", () => {
  test("parses resume with C++ and special characters without throwing error", () => {
    const rawText = `Jane Doe
Senior Systems Engineer
Summary:
Experienced software architect specializing in high-performance C++, C#, .NET, and CI/CD pipelines.

Contact: jane.doe@example.com
LinkedIn: https://linkedin.com/in/janedoe
GitHub: https://github.com/janedoe

Skills: C++, C#, .NET, Next.js, Vue.js, Docker, Kubernetes, CI/CD, HTML5/CSS3

Experience:
Senior Software Engineer at TechCorp
Led latency reduction initiatives by 45%. Managed 15+ engineers.
    `;

    assert.doesNotThrow(() => {
      const result = fallbackParseTextToResume(rawText);
      assert.strictEqual(result.name, "Jane Doe");
      assert.strictEqual(result.contact.email, "jane.doe@example.com");

      const skills = result.skills[0].items;
      assert.ok(skills.includes("C++"), "Should include C++ in skills");
      assert.ok(skills.includes("C#"), "Should include C# in skills");
      assert.ok(skills.includes(".NET"), "Should include .NET in skills");
      assert.ok(skills.includes("Next.js"), "Should include Next.js in skills");
      assert.ok(skills.includes("Vue.js"), "Should include Vue.js in skills");
      assert.ok(skills.includes("CI/CD"), "Should include CI/CD in skills");
      assert.ok(skills.includes("HTML5/CSS3"), "Should include HTML5/CSS3 in skills");
    });
  });
});
