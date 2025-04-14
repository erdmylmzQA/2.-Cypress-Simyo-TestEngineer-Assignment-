Feature: Valideer in stap4 (Gegevens) bij de bestelling de persoonlijke gegevens. 

- Als gebruiker wil ik de persoonlijke gegevens valideren voordat ik verder ga met bestellen.

  

  Scenario: Valideer de persoonlijke gegevens
    Given ben ik op de simyo homepage
    When navigeer ik naar Sim Only
    When kies ik 10GB bundel
    Then klik ik op de Kies dit abonnement
    When kies ik de normale simkaart
    Then ga ik verder met de volgende stap
    When kies ik de Nee, ik wil een nieuw nummer optie
    Then ga ik naar de mijn-gegevens pagina
    When vul ik alle bijbehorende betaalgegevens
    Then valideer ik de persoonlijke gegevens
