const skills = [
    'Serverless', 'Angular', 'NodeJS', 'Jenkins', 'React', 'Git', 'D3', 'MongoDb', 'AWS', 'HTML', 'CSS',
    'JavaScript', 'ELK', 'Sketch', 'Docker', 'Express', 'TypeScript', 'DataVisualisation'
]

const contentOptions = [ 'jc-space-between', 'jc-space-evenly' ]

const attachSkills = () => {
    // let skillsDoc = document.getElementById('ak-skills');
    // console.log(skillsDoc);
    let skillsNewDoc = ''
    // skills.map(skill => {
    //     skillsNewDoc = skillsNewDoc + `<span class="fs-18 c-primary ff-roboto-mono">${skill}</span>`
    // });
    let skillsLength = skill.length;
    for(let i = 0; i < skillsLength; i++) {
        let contentOptionIndex = Math.floor(Math.random() * 2);
        let numberOfSkills = Math.floor(Math.random() * 2);
        for(let i = 0; i < numberOfSkills; i++) {

        }
    }
    // document.getElementById('ak-skills').innerHTML = skillsNewDoc
}