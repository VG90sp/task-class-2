export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const unitsType = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка!Длина имени должна быть минимум 2 символа и максимум 10 символов');
    }
    if (!unitsType.includes(type)) {
      throw new Error('Ошибка!Неправильный тип персонажа');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Ошибка! Нельзя повысить уровень умершего персонажа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
