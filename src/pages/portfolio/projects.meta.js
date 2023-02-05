const PROJECTS_META = [
    {
        title: 'Manipulator Configuration Space',
        content: 'In this we are drawing Configuration Space of two link manipulator which is placed among the obstacles. The manipulator has 2 degree of freedom that is why the configuration space has 2 dimensional plot. In configuration space, the same color is denoting the collision of robot with that color obstacle. Rest of the color is simply showing the non-collision zone of robot.',
        media: [
            { link: 'https://www.youtube.com/embed/wIY0vmXf3BE?autoplay=0', title: 'Manipulator Workspace' },
            { link: 'https://www.youtube.com/embed/8lvCUK3cBWA?autoplay=0', title: 'Configuration Space' }
        ]
    },
    {
        title: 'Rapidly-exploring random tree',
        content: 'Here, we have used RRT to plan the path of mobile robot in different workspaces. Every algorithm is completed in different number of iterations. We have used only one point tree generation for planning the path for faster planning two point tree generation can be used. Number of Iterations (NoI) depends on the random points sampling positions so, we get different values at almost every run.',
        media: [
            {
                link: 'https://www.youtube.com/embed/5gV-P4nt048?autoplay=0', title: 'Single Point Tree Generation', subTitle: 'Number of Iterations: 1000'
            },
            {
                link: 'https://www.youtube.com/embed/uUIyWGl_d7w?autoplay=0', title: 'Two Point Tree Generation', subTitle: 'Number of Iterations: 200'
            },
            {
                link: 'https://www.youtube.com/embed/7favRKNxcsk?autoplay=0', title: 'Single Point Tree Generation', subTitle: 'Number of Iterations: 2500'
            },
            {
                link: 'https://www.youtube.com/embed/3zIF-PMZPKc?autoplay=0', title: 'Single Point Tree Generation', subTitle: 'Number of Iterations: 1200'
            },
            {
                link: 'https://www.youtube.com/embed/FuEZ1Uxf97Q?autoplay=0', title: 'Single Point Tree Generation', subTitle: 'Number of Iterations: 4825'
            },
        ]
    },
    {
        title: 'Artificial Potential Field Path Planning',
        content: 'Here, we have used Potential Field Algorithm to plan the path of mobile robot in different workspaces. In this algorithm, target and robot has force of attraction while the robot and obstacle has force of repulsion. If these two forces come in line then the problem of local minima occurs.',
        media: [
            { link: 'https://www.youtube.com/embed/ZAFhE9vPAZY?autoplay=0', title: 'Reaching Target with one obstacle' },
            { link: 'https://www.youtube.com/embed/B1bwDn2GzIc?autoplay=0', title: 'Reaching Target with two obstacle' },
            { link: 'https://www.youtube.com/embed/B1bwDn2GzIc?autoplay=0', title: 'Problem of Local Minima' },
            { details: 'Here it is easily visible that both of the forces i.e, attraction and repulsion are inline so robot is stuck at local minima. One of the ways to eliminate it using tangetial force.' }
        ]
    },
    {
        title: '3 Dimensional Path Planning',
        content: 'Here, we have used Potential Field Algorithm to plan the path of aerial robot in 3 dimensional space. We have shown the path planning for two different initial points to target point. Potential field algorithms used the heuristics to deicide the factors used in their potential functions, if not chosen correctly, chances of high repulsion or weird behaviour is found in generated path. Due to poor selection a high amount of jerks are encountered by robot in workspace.',
        media: [
            { link: 'https://www.youtube.com/embed/6AuAL4lhkGk?autoplay=0', title: 'Motion Planning of Drone' },
            { link: 'https://www.youtube.com/embed/Af1Ecq0HD9Y?autoplay=0', title: 'Motion Planning of Drone' }
        ]
    }
]

export default PROJECTS_META;