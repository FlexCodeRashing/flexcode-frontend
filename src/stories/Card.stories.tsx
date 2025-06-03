import BaseCard from "@/components/templates/BaseCard";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof BaseCard> = {
    title: "BaseCard",
    component: BaseCard
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: (
            <>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis
                massa nisl malesuada lacinia integer nunc posuere. Nulla
                molestie mattis scelerisque maximus eget fermentum odio. Ligula
                congue sollicitudin erat viverra ac tincidunt nam. Dui felis
                venenatis ultrices proin libero feugiat tristique. Sem placerat
                in id cursus mi pretium tellus. Taciti sociosqu ad litora
                torquent per conubia nostra. Mauris pharetra vestibulum fusce
                dictum risus blandit quis. Justo lectus commodo augue arcu
                dignissim velit aliquam. Senectus netus suscipit auctor
                curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar
                vivamus fringilla lacus. Et magnis dis parturient montes
                nascetur ridiculus mus. Ante condimentum neque at luctus nibh
                finibus facilisis. Rutrum gravida cras eleifend turpis fames
                primis vulputate. Dolor sit amet consectetur adipiscing elit
                quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut
                hendrerit. Mattis scelerisque maximus eget fermentum odio
                phasellus non. Sollicitudin erat viverra ac tincidunt nam porta
                elementum. Venenatis ultrices proin libero feugiat tristique
                accumsan maecenas. In id cursus mi pretium tellus duis
                convallis. Ad litora torquent per conubia nostra inceptos
                himenaeos. Vestibulum fusce dictum risus blandit quis
                suspendisse aliquet. Commodo augue arcu dignissim velit aliquam
                imperdiet mollis. Suscipit auctor curabitur facilisi cubilia
                curae hac habitasse. Urna tempor pulvinar vivamus fringilla
                lacus nec metus. Dis parturient montes nascetur ridiculus mus
                donec rhoncus. Neque at luctus nibh finibus facilisis dapibus
                etiam. Cras eleifend turpis fames primis vulputate ornare
                sagittis. Amet consectetur adipiscing elit quisque faucibus ex
                sapien. Lacinia integer nunc posuere ut hendrerit semper vel.
                Maximus eget fermentum odio phasellus non purus est. Viverra ac
                tincidunt nam porta elementum a enim. Proin libero feugiat
                tristique accumsan maecenas potenti ultricies. Cursus mi pretium
                tellus duis convallis tempus leo. Torquent per conubia nostra
                inceptos himenaeos orci varius. Dictum risus blandit quis
                suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam
                imperdiet mollis nullam volutpat. Curabitur facilisi cubilia
                curae hac habitasse platea dictumst. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Montes nascetur ridiculus mus
                donec rhoncus eros lobortis.
            </>
        )
    }
};
