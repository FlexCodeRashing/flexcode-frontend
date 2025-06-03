import { RuleConfigSeverity, UserConfig } from "@commitlint/types";

const config: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            RuleConfigSeverity.Error,
            "always",
            [
                "build",
                "docs",
                "fix",
                "refactor",
                "revert",
                "chore"
            ]
        ]
    }
}

export default config;
