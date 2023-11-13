import express, { Request, Response } from "express";
import Replicate from "replicate";
import cors from "cors";

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

app.options("/api/genimg", (req: Request, res: Response) => {
  // Pre-flight request. Reply successfully:
  res.status(200).end();
});

app.post("/api/genimg", async (req: Request, res: Response) => {
  const { value } = req.body;

  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN || "",
    });

    const result = await replicate.run(
      "stability-ai/stable-diffusion:a00d0b7dcbb9c3fbb34ba87d2d5b46c56969c84a628bf778a7fdaec30b1b99c5",
      {
        input: {
          prompt: value,
          image_dimensions: "1024x1024",
          num_inference_steps: 50,
          num_outputs: 1,
          guideance_scale: 7.5,
          prompt_strength: 0.8,
          scheduler: "KarrasDPM",
        },
      }
    );

    res.status(200).json(result);
  } catch (error) {
    console.error("Failed to generate image. Error:", error);
    res.status(500).json({ message: "Failed to generate image" });
  }
});

app.all("/api/genimg", (req: Request, res: Response) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
