import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Spritesmith from "vite-plugin-spritesmith";
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var command = _a.command;
    return {
        base: "",
        plugins: [
            react(),
            buildAtlas("rome"),
            buildAtlas("people"),
            buildAtlas("buildings"),
            buildAtlas("tiles"),
            buildAtlas("misc"),
        ],
        server: {
            port: 3000,
            host: true,
        },
        build: {
            target: "es2015",
        },
        test: {
            browser: {
                enabled: true,
                headless: true,
                name: "chrome",
            },
        },
    };
    function buildAtlas(folder) {
        return Spritesmith({
            watch: command === "serve",
            src: {
                cwd: "./src/textures/".concat(folder),
                glob: "*.png",
            },
            target: {
                image: "./src/images/textures_".concat(folder, ".png"),
                css: [["./src/images/textures_".concat(folder, ".json"), { format: "json_texture" }]],
            },
            spritesmithOptions: {
                padding: 1,
            },
        });
    }
});
