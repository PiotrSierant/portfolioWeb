![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj fork repozytorium (stworzony w punkcie 1) na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres możesz znaleźć na stronie forka repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

### Poszczególne zadania rozwiązuj w odpowiednich plikach.

**Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.**


## Zadanie 1

### Odpowiedź do zadania umieść w pliku `01_Zadanie_1/answer.md`

Opisz własnymi słowami, jaka jest __główna__ różnica między używaniem funkcji definiowanej za pomocą słowa kluczowego `function` a za pomocą tzw. fat arrow (`=>`) ?



## Zadanie 2 - ES6
Podczas wykonywania tego zadania **nie używaj biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `02_Zadanie_2`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


Cel zadania to poprawne stworzenie klas i obiektów.

Stwórz klasę abstrakcyjną ```RPGCharacter```. Niech konstruktor tej klasy przyjmuje następujący parametr:
- ```name``` - imię

Dodatkowo niech konstruktor tworzy następujące właściwości dla każdego obiektu:
- ```power``` - siła,
- ```intelligence``` - inteligencja
- ```luck``` - szczęście

Na podstawie tej klasy stwórz 3 klasy dziedziczące: ```Dwarf```, ```Orc``` i ```Elf``` (czyli odpowiednio: Krasonolud, Ork oraz Elf).

Konstruktory tych klas powinny nadpisać konstruktor klasy abstrakcyjnej:
- wykorzystaj konstruktor klasy abstrakcyjnej aby ustawiać każdemu obiektowi imię (```name```),
- niech każda postać posiada określoną siłę (```power```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
    * Krasnoludy - siła w zakresie od 40 - 100
    * Orki - siła w zakresie od 50 - 100
    * Elfy - siła w zakresie od 30 - 80   
- niech każda postać posiada określoną inteligencję (```intelligence```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
     * Krasnoludy - mądrość w zakresie od 40 - 80
     * Orki - mądrość w zakresie od 5 - 20
     * Elfy - mądrość w zakresie od 60 - 100
- niech każda postać posiada określone szczęście (```luck```) w zależności od rasy (wylosuj liczbę z odpowiedniego zakresu):
     * Krasnoludy - szczęście w zakresie od 40 - 100
     * Orki - szczęście w zakresie od 1 - 100
     * Elfy - szczęście w zakresie od 20 - 100
- dodatkowo niech każda klasa odpowiednio ustawia piątą właściwość - rasę (```race```) na odpowiednią wartość (```Dwarf```, ```Orc``` lub ```Elf```) w zależności od klasy.

Następnie stwórz 3 obiekty na bazie klas dziedziczących i przekaż im następujące imiona: ```Durin Kamienny Topór``` (__krasnolud__), ```Urk'har Niszczyciel``` (__ork__), ```Naylee z Nieśmiertelnego Lasu``` (__elf__).

Na końcu dodaj do klasy abstrakcyjnej 3 metody:
- ```fight``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w walce wręcz (porównujemy wartości właściwości ```power```). Metoda zwraca imię zwycięzcy. W przypadku remisu (każdy z zawodników nie ma siły walczyć) zwróć ciąg znaków ```Remis!```. 
- ```playChess``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w grze w szachy (porównujemy wartości właściwości ```intelligence```). Metoda zwraca imię zwycięzcy. W przypadku remisu (partia szachów niemożliwa do skończenia) zwróć ciąg znaków ```Remis!```. 
- ```tossCoin``` - metoda przyjmuje jako parametr obiekt stworzony na podstawie innej klasy. Zadaniem metody jest sprawdzenie, która z naszych postaci wygra w rzucie monetą (porównujemy wartości właściwości ```luck```). Metoda zwraca imię zwycięzcy. W przypadku remisu (moneta spadła na krawędź) zwróć ciąg znaków ```Remis!```. 

Przykład:

```javascript
const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

orc.fight(elf); // "Urk'har Niszczyciel" - gdyż akurat ten ork jest silniejszy do elfa
elf.playChess(dwarf) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf jest mądrzejszy od krasnoluda
dwarf.tossCoin(elf) // "Naylee z Nieśmiertelnego Lasu" - gdyż akurat ten elf ma więcej szczęścia niż krasnolud 
```



## Zadanie 3

### Odpowiedź do zadania umieść w pliku `03_Zadanie_3/answer.md`

Podaj dwie zasady tagów JSX. Opisz je.



## Zadanie 4 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `04_Zadanie_4`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


Stwórz komponent `App` i wyrenderuj elementy:
- `div` z napisem "Egzamin",
- `button` z napisem "Klik", przycisk nie ma nic robić.



## Zadanie 5 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `05_Zadanie_5`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


W komponencie funkcyjnym `Square` stwórz zmienną z dowolnym rozmiarem (poprawny rozmiar CSS), np.:

```JavaScript
const size = "700px";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div` z następującym stylem:

- Szerokość: ta ze zmiennej `size`,
- Wysokość: ta ze zmiennej `size`,
- Kolor: niebieski.

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Każdorazowa zmiana tej zmiennej powinna zmienić wielkość `div`-a.



## Zadanie 6 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `06_Zadanie_6`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


Stwórz komponent **klasowy** o nazwie `RandomNumbers`. Do `props` przyjmuje wartości `min`, `max` i `count`. Generuje on do tablicy (`numbers`) tyle liczb pseudolosowych z zakresu `min` i `max`, ile podano w `count`.

Następnie stwórz komponent **klasowy** `RandomNumbersInfo`, który będzie wyświetlał w elemencie `div` informację o zadanym minimum, maksimum i ilości liczb (przez `props` z komponentu `RandomNumbers`).

Ostatnim komponentem **klasowym** będzie `RandomNumbersList`, który ma wyświetlać wszystkie wylosowane liczby w dowolnej formie listy.

Wyrenderuj `RandomNumbers` w komponencie `App`, podając w atrybutach do props przykładowe dane.
