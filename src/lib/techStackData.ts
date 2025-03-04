// 定义技术栈数据的类型
export type TechStackItem = {
    name: string;
    icon: string;
};

export type TechStack = {
    cate: string;
    list: TechStackItem[];
}



// 定义技术栈数组
export const featuredTechStack: TechStack[] = [
    {
        cate: "Frontend",
        list: [
            { name: "HTML", icon: "/svg/LogosHtml5.svg" },
            { name: "CSS", icon: "/svg/LogosCss3.svg" },
            { name: "JavaScript", icon: "/svg/LogosJavascript.svg" },
            { name: "TypeScript", icon: "/svg/LogosTypescriptIcon.svg" },
            { name: "Vue.js", icon: "/svg/LogosVue.svg" },
            { name: "Tailwind CSS", icon: "/svg/LogosTailwindcssIcon.svg" },
            { name: "Astro", icon: "/svg/LogosAstroIcon.svg" },
            { name: "Nuxt.js", icon: "/svg/SkillIconsNuxtjsLight.svg" },
        ],
    },
    {
        cate: "Backend",
        list: [
            { name: "Spring Boot", icon: "/svg/LogosSpringIcon.svg" },
            { name: "Spring Cloud", icon: "/svg/LogosSpringIcon.svg" }, // 假设Spring Cloud图标和Spring Boot一样
            { name: "Gin", icon: "/svg/LogosGin.svg" },
        ],
    },
    {
        cate: "Database",
        list: [
            { name: "MySQL", icon: "/svg/LogosMysqlIcon.svg" },
            { name: "Redis", icon: "/svg/LogosRedis.svg" },
        ],
    },
    {
        cate: "Others",
        list: [
            { name: "Git", icon: "/svg/LogosGitIcon.svg" },
            { name: "Docker", icon: "/svg/LogosDockerIcon.svg" },
            { name: "Nginx", icon: "/svg/SkillIconsNginx.svg" },
            { name: "Bash", icon: "/svg/SkillIconsBashLight.svg" },
            { name: "GitHub", icon: "/svg/LogosGithubIcon.svg" },
            { name: "Apple", icon: "/svg/LogosApple.svg" },  // 示例其他图标
            { name: "Linux", icon: "/svg/LogosLinuxTux.svg" },
            { name: "Windows", icon: "/svg/LogosMicrosoftWindowsIcon.svg" },
            { name: "IntelliJ IDEA", icon: "/svg/LogosIntellijIdea.svg" },
            { name: "VS Code", icon: "/svg/LogosVisualStudioCode.svg" },
        ],
    },
    {
        cate: "Languages",
        list: [
            { name: "C", icon: "/svg/SkillIconsC.svg" },
            { name: "C++", icon: "/svg/SkillIconsCpp.svg" },
        ]
    },
    {
        cate: "Middleware",
        list: [
            { name: "RabbitMQ", icon: "/svg/SkillIconsRabbitmqLight.svg" },
            { name: "Elaticsearch", icon: "/svg/SkillIconsElasticsearchLight.svg" },
        ]
    }
];